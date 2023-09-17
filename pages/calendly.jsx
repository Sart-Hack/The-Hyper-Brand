import React, { useEffect } from 'react';
import { PopupButton } from 'react-calendly';

function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootElement = document.getElementById('Calendly-Button');
      if (rootElement) {
        // Render the PopupButton component when the document is available
        return (
          <PopupButton
            url="https://calendly.com/sarthakgupta124"
            rootElement={rootElement}
            text="Click here to schedule!"
          />
        );
      }
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <div>
      {/* You can render other content here */}
    </div>
  );
}

export default Home;
