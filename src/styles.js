const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-bittersweet-500 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-bittersweet-500 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-cornmilk-500",
};

// Add gradient classes as CSS-in-JS styles that can be used with Tailwind
const gradientStyles = `
  .blue-text-gradient {
    background: linear-gradient(90.13deg, #00d2ff 1.9%, #3a7bd5 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .green-text-gradient {
    background: linear-gradient(90.13deg, #00f260 1.9%, #0575e6 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .red-text-gradient {
    background: linear-gradient(90.13deg, #ff6a00 1.9%, #ee0979 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pink-text-gradient {
    background: linear-gradient(90.13deg, #f093fb 1.9%, #f5576c 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .purple-text-gradient {
    background: linear-gradient(90.13deg, #c471f5 1.9%, #fa71cd 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .yellow-text-gradient {
    background: linear-gradient(90.13deg, #ffeaa7 1.9%, #fab1a0 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .orange-text-gradient {
    background: linear-gradient(90.13deg, #ff9a56 1.9%, #ff6b35 97.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .violet-text-gradient {
    background: linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

// Inject the styles into the document head when this module is imported
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = gradientStyles;
  document.head.appendChild(styleElement);
}

export { styles };