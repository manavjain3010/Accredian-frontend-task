import { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Box,
  TextField,
  Button,
  Dialog,
  IconButton,
  Typography,
  createTheme,
  ThemeProvider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Slide,
  LinearProgress,
  Snackbar
} from '@mui/material';
import { 
  Close, 
  Email, 
  Phone, 
  Person, 
  Work, 
  School,
  ArrowForward,
  ArrowBack
} from '@mui/icons-material';
import { FaHandshake } from 'react-icons/fa';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed',
    },
    secondary: {
      main: '#4f46e5',
    },
  },
});

const programs = [
  'Full Stack Development',
  'Data Science',
  'UI/UX Design',
  'Cloud Computing',
  'Cybersecurity',
  'AI/ML'
];

const steps = ['Referrer Details', 'Referee Details'];

export default function ReferralForm({ onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    fieldOfWork: '',
    program: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateStep = (step) => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (step === 0) {
      if (!formData.referrerName?.trim()) {
        newErrors.referrerName = 'Referrer Name is required';
      }
      if (!formData.referrerEmail?.trim()) {
        newErrors.referrerEmail = 'Referrer Email is required';
      } else if (!emailRegex.test(formData.referrerEmail)) {
        newErrors.referrerEmail = 'Invalid email format';
      }
    } else if (step === 1) {
      if (!formData.refereeName?.trim()) {
        newErrors.refereeName = 'Referee Name is required';
      }
      if (!formData.refereeEmail?.trim()) {
        newErrors.refereeEmail = 'Referee Email is required';
      } else if (!emailRegex.test(formData.refereeEmail)) {
        newErrors.refereeEmail = 'Invalid email format';
      }
      if (!formData.fieldOfWork?.trim()) {
        newErrors.fieldOfWork = 'Field of Work is required';
      }
      if (!formData.program) {
        newErrors.program = 'Program is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(activeStep)) return;

    // Validate all fields before submission
    const allFieldsValid = validateStep(0) && validateStep(1);
    if (!allFieldsValid) {
      setSubmitError('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          referrerName: formData.referrerName.trim(),
          referrerEmail: formData.referrerEmail.trim(),
          referrerPhone: formData.referrerPhone?.trim(),
          refereeName: formData.refereeName.trim(),
          refereeEmail: formData.refereeEmail.trim(),
          refereePhone: formData.refereePhone?.trim(),
          fieldOfWork: formData.fieldOfWork.trim(),
          program: formData.program
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit referral");
      }

      setSuccessMessage('Referral submitted successfully! Confirmation emails have been sent.');
      console.log('Referral submitted successfully:', data);
      
      // Close the form after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting referral:', error);
      setSubmitError(error.message || 'Failed to submit referral. Please try again.');
      // If there's a validation error, go back to the relevant step
      if (error.message.includes('Referrer')) {
        setActiveStep(0);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Slide direction="left" in={activeStep === 0} mountOnEnter unmountOnExit>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, mt: 1 }} color="primary">
                Your Details
              </Typography>
              <TextField
                required
                fullWidth
                margin="normal"
                label="Your Name"
                name="referrerName"
                error={!!errors.referrerName}
                helperText={errors.referrerName}
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.referrerName}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Your Email"
                name="referrerEmail"
                type="email"
                error={!!errors.referrerEmail}
                helperText={errors.referrerEmail}
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.referrerEmail}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Your Phone"
                name="referrerPhone"
                InputProps={{
                  startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.referrerPhone}
                onChange={handleChange}
              />
            </Box>
          </Slide>
        );
      case 1:
        return (
          <Slide direction="left" in={activeStep === 1} mountOnEnter unmountOnExit>
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 2, mt: 1 }} color="primary">
                Referee Details
              </Typography>
              <TextField
                required
                fullWidth
                margin="normal"
                label="Referee Name"
                name="refereeName"
                error={!!errors.refereeName}
                helperText={errors.refereeName}
                InputProps={{
                  startAdornment: <Person sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.refereeName}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Referee Email"
                name="refereeEmail"
                type="email"
                error={!!errors.refereeEmail}
                helperText={errors.refereeEmail}
                InputProps={{
                  startAdornment: <Email sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.refereeEmail}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Referee Phone"
                name="refereePhone"
                InputProps={{
                  startAdornment: <Phone sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.refereePhone}
                onChange={handleChange}
              />
              <TextField
                required
                fullWidth
                margin="normal"
                label="Field of Work"
                name="fieldOfWork"
                error={!!errors.fieldOfWork}
                helperText={errors.fieldOfWork}
                InputProps={{
                  startAdornment: <Work sx={{ mr: 1, color: 'action.active' }} />
                }}
                value={formData.fieldOfWork}
                onChange={handleChange}
              />
              <FormControl fullWidth margin="normal" required error={!!errors.program}>
                <InputLabel>Program</InputLabel>
                <Select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  label="Program"
                  startAdornment={<School sx={{ mr: 1, color: 'action.active' }} />}
                >
                  {programs.map((program) => (
                    <MenuItem key={program} value={program}>
                      {program}
                    </MenuItem>
                  ))}
                </Select>
                {errors.program && (
                  <Typography color="error" variant="caption" sx={{ mt: 1, ml: 2 }}>
                    {errors.program}
                  </Typography>
                )}
              </FormControl>
            </Box>
          </Slide>
        );
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog 
        open={true} 
        onClose={onClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxHeight: '90vh'
          }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
          >
            <Close />
          </IconButton>

          {/* Header */}
          <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            p: 3,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <FaHandshake style={{ fontSize: 48 }} />
              <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                Referral Program
              </Typography>
              <Typography variant="subtitle1">
                Share the opportunity with someone
              </Typography>
            </Box>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          {/* Form Content */}
          <Box sx={{ p: 3 }}>
            {isSubmitting && <LinearProgress sx={{ mb: 2 }} />}
            
            {submitError && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {submitError}
              </Alert>
            )}

            {successMessage && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {successMessage}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              {renderStepContent(activeStep)}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 0 || isSubmitting}
                  startIcon={<ArrowBack />}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    endIcon={<FaHandshake />}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Referral'}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={isSubmitting}
                    endIcon={<ArrowForward />}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Dialog>

      <Snackbar
        open={!!successMessage}
        autoHideDuration={2000}
        message={successMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </ThemeProvider>
  );
}

ReferralForm.propTypes = {
  onClose: PropTypes.func.isRequired
}; 