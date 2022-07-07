import React from 'react';

const viewCodeUrl = 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code/64.bas';
const rawCodedUrl = 'https://github.com/akzhar/vba-helpers-api/raw/main/data/code/64.bas';

const HelperItem: React.FC = () => (
  <details className="helper">
    <summary>
      <span>Helper category + name + title</span>
      <button>Copy link to the helper<span role="img" aria-label="link">🔗</span></button>
    </summary>
    <div className="helper__details">
      <p className="helper__details-column">
        <a href={viewCodeUrl} target="blank">View code <span role="img" aria-label="eyes">👀</span></a>
        <a href={rawCodedUrl}>Get raw .bas file <span role="img" aria-label="script">📜</span></a>
      </p>
      <p className="helper__details-column">
        Description
      </p>
      <p className="helper__details-column">
        Usage
      </p>
    </div>
  </details>
);

export default HelperItem;
