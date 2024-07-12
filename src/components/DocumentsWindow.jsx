import React, { useState } from 'react';
import './DocumentsWindow.css';

const imageFolders = {
  clothes: [
    { name: 'Dress', src: '/assets/images/docs/dress.png' },
    { name: 'Shoes', src: '/assets/images/docs/shoes.png' },
  ],
  shoes: [
    { name: 'Sneakers', src: '/assets/images/docs/sneakers.png' },
    { name: 'Boots', src: '/assets/images/docs/boots.png' },
  ],
  tidbits: [
    { name: 'Tidbit1', src: '/assets/images/docs/tidbit1.png' },
    { name: 'Tidbit2', src: '/assets/images/docs/tidbit2.png' },
  ],
};

function DocumentsWindow({ onClose }) {
  const [currentFolder, setCurrentFolder] = useState(null);

  const handleFolderClick = (folder) => {
    setCurrentFolder(folder);
  };

  return (
    <div className="documents-window">
      <div className="title-bar">
        <div className="title-bar-text">My Documents</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose}>X</button>
        </div>
      </div>
      <div className="window-body">
        {currentFolder ? (
          <div>
            <button onClick={() => setCurrentFolder(null)}>Back</button>
            <ul className="image-list">
              {imageFolders[currentFolder].map((image) => (
                <li key={image.name}>
                  <img src={image.src} alt={image.name} />
                  <p>{image.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="folder-list">
            {Object.keys(imageFolders).map((folder) => (
              <li key={folder}>
                <button onClick={() => handleFolderClick(folder)}>
                  {folder.charAt(0).toUpperCase() + folder.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DocumentsWindow;