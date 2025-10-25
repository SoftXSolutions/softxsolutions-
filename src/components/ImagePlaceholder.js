import React from 'react';

const ImagePlaceholder = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  placeholderText = "Image Placeholder" 
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError || !src) {
    return (
      <div 
        className={`bg-gradient-to-br from-softx-orange/20 to-softx-orange/5 border-2 border-dashed border-softx-orange/30 rounded-lg flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <div className="text-softx-orange text-2xl mb-2">📷</div>
          <p className="text-softx-white text-sm font-medium">{placeholderText}</p>
          <p className="text-gray-400 text-xs mt-1">Download from SoftXSol.com</p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default ImagePlaceholder;