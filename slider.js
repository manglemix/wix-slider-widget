// To debug this code, open wixDefaultCustomElement.js in Developer Tools.

const IMAGE_URL = 'https://wix.to/vUBXBKU';
const H2_TEXT = 'This is a Custom Element';
const H3_1_TEXT = 'View its code by clicking the Settings button and pasting the Server URL into a new browser tab.';
const H3_2_TEXT = 'Explore this code and use it as a reference to create your own element.';
const DEBUG_TEXT = 'Loading the code for Custom Element \'wix-default-custom-element\'. To debug this code, open wixDefaultCustomElement.js in Developer Tools.';

const createH2 = () => {
  const h2Element = document.createElement('h2');
  h2Element.textContent = H2_TEXT;
  h2Element.id = 'wdce-h2';
  return h2Element;
};

const createH3 = (id, text) => {
  const h3Element = document.createElement('h3');
  h3Element.id = id;
  h3Element.textContent = text;
  return h3Element;
};

const createTextContainer = () => {
  const textContainer = document.createElement('div');
  textContainer.id = 'wdce-text-container';
  textContainer.appendChild(createH2());
  textContainer.appendChild(createH3('wdce-h3-1', H3_1_TEXT));
  textContainer.appendChild(createH3('wdce-h3-2', H3_2_TEXT));
  return textContainer;
};

const createImageContainer = () => {
  const imageContainer = document.createElement('div');
  imageContainer.id = 'wdce-image-container';
  
  const leftElement = document.createElement('img');
  imageElement.src = IMAGE_URL;
  imageElement.class = 'pane left';

  imageContainer.appendChild(leftElement);
  
  const rightElement = document.createElement('img');
  imageElement.src = IMAGE_URL;
  imageElement.class = 'pane right';

  imageContainer.appendChild(rightElement);

  return imageContainer;
};

const createStyle = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    .pane {
        width: 300px;
        position: absolute;
    }

    .left {
        clip-path: rect(0 var(--slider) 100% 0);
    }

    .right {
        clip-path: rect(0 100% 100% var(--slider));
    }
    `;
  return styleElement;
};

class WixDefaultCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log(DEBUG_TEXT);
  }

  connectedCallback() {
    this.appendChild(createStyle());
    this.appendChild(createImageContainer());
    this.appendChild(createTextContainer());
  }
}
customElements.define('wix-default-custom-element', WixDefaultCustomElement);
