// This below code works foe the downloading of files
export const handleDownloadResume = () => {
  const pdfUrl = 'src/assets/ALUKO-OLAKUNLE-S-Resume.pdf';
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.target = '';
  link.download = 'Aluko Olakunle Samuel.pdf';
  link.click();
};
