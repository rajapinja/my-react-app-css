import React from 'react';

function lightenColor(color, percent) {
  // Validate input
  if (color.length !== 7 || color[0] !== '#') {
    throw new Error('Invalid hex color format');
  }

  // Remove the hash character from the color string
  color = color.slice(1);

  // Convert hex to RGB
  const num = parseInt(color, 16);
  let r = (num >> 16) + percent;
  let g = ((num >> 8) & 0x00FF) + percent;
  let b = (num & 0x0000FF) + percent;

  // Ensure values are in the range [0, 255]
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);

  // Convert RGB back to hex
  const hex = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

  return hex;
}

function LighterColorExample() {
  const originalColor = '#FF33A1'; //'#3498db';
  const lighterColor = lightenColor(originalColor, 70); // Generate a lighter shade by 20%

  return (
    <div>
      <h4>Utility Component</h4>
      - Takes Darker Color and Gives 60% reduced lighter color
      <div style={{ backgroundColor: originalColor, padding: '20px', marginBottom: '10px' }}>
        Original Color: {originalColor}
      </div>
      <div style={{ backgroundColor: lighterColor, padding: '20px' }}>
        Lighter Color: {lighterColor}
      </div>
    </div>
  );
}

export default LighterColorExample;

// let r = (num >> 16) + percent;: This line extracts the red component of the color. Imagine a color represented by a number. By shifting the bits of this number by 16 positions to the right (>> 16), we isolate the bits that represent the red component. Then, we add a percentage value (percent) to adjust the brightness of the red component.

// let g = ((num >> 8) & 0x00FF) + percent;: This line extracts the green component of the color. Similar to the red component, we first shift the bits of the color number by 8 positions to the right (>> 8) to isolate the bits representing the green component. Then, we use the bitwise AND operation (&) with 0x00FF to clear the higher bits and keep only the lower 8 bits, which represent the green component. After that, we add the percentage value to adjust the brightness of the green component.

// let b = (num & 0x0000FF) + percent;: This line extracts the blue component of the color. We use the bitwise AND operation (&) with 0x0000FF to keep only the lower 8 bits, which represent the blue component. Then, we add the percentage value to adjust the brightness of the blue component.

// r = Math.min(Math.max(r, 0), 255);, g = Math.min(Math.max(g, 0), 255);, b = Math.min(Math.max(b, 0), 255);: These lines ensure that the color component values (r, g, and b) stay within the valid range of [0, 255]. If any of the values fall below 0, they are set to 0, and if they exceed 255, they are set to 255.

// const hex = #${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')};: This line converts the adjusted RGB values back to a hex color representation. It shifts the red component by 16 bits to the left (<< 16), the green component by 8 bits to the left (<< 8), and then combines them using bitwise OR (|). Finally, it converts the combined RGB value to a hexadecimal string and ensures it has 6 digits by padding with zeros if necessary. The resulting string represents the adjusted color in hexadecimal format.