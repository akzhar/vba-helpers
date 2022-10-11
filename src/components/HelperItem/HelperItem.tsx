import React, { useEffect } from 'react';
import { THelper } from '@services/Api';

import Anchor from '@components/Anchor';
import { AppRoutes, HelperLinks } from '@consts/const';

type THelperItemProps = {
  helper: THelper,
  isOpen: boolean
};

const HelperItem: React.FC<THelperItemProps> = ({helper, isOpen}) => {

  const codeLinesCount = (helper.usage.match(/\n/g)||[]).length + 1;

  useEffect(() => {
    try {
      const hljs = window.hljs;
      // https://github.com/dullin/highlightjs-vba does paste html in code
      hljs.configure({ ignoreUnescapedHTML: true, languages:['xml'] });
      hljs.highlightAll();
    // eslint-disable-next-line no-empty
    } catch(e) {}
  }, []);

  return (
    <details className="helper" open={isOpen}>
      <summary>
        <span className="helper__name">{helper.name}</span>
        <Anchor url={`${AppRoutes.SEARCH}?type=i&query=${helper.id}`} aria-label="Link to the helper"/>
      </summary>
      <div className="helper__details">
        <div className="helper__column">
          <ul className="helper__category">
            {
              helper.category.map((el, i) => (<li key={i}>{el}</li>))
            }
          </ul>
          <div className="helper__links">
            <a href={`${HelperLinks.CODE}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="12" height="12"><use xlinkHref="#eye" /></svg>
              <span>View code</span>
            </a>
            <a href={`${HelperLinks.FILE}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="12" height="12"><use xlinkHref="#script" /></svg>
              <span>{`File ${helper.file.slice(helper.file.indexOf('.'))}`}</span>
            </a>
          </div>
        </div>
        <div className="helper__column">
          <h3 className="helper__header">What is it?</h3>
          <p
            className="helper__description"
            dangerouslySetInnerHTML={
              {__html: `
                <p>${helper.title}</p>
                ${helper.description && (window.marked ? window.marked.parse(helper.description) : helper.description)}
              `}
            }>
          </p>
          { helper.demo &&
            <>
              <h3 className="helper__header">How it works?</h3>
              <a className="helper__demo" href={`${HelperLinks.DEMO}/${helper.demo}`} target="_blank" rel="noreferrer">
                <img src={`${HelperLinks.DEMO}/${helper.demo}`} alt="demo" title="Open the demo" />
                <svg width="20" height="20">
                  <use xlinkHref="#zoom" />
                </svg>
              </a>
            </>
          }
        </div>
      </div>
      <div className="helper__example">
        <h3 className="helper__header">How to use it?</h3>
        {
          helper.usage.length
          ?
          <pre>
            <div className="helper__code-lines">
              {
                new Array(codeLinesCount).fill(0).map((_n, i) => (<span key={i}>{i + 1}</span>))
              }
            </div>
            <code className="language-vba">
              {helper.usage}
            </code>
            <div className="helper__code-lines">
              {
                new Array(codeLinesCount).fill(0).map((_n, i) => (<span key={i}>{i + 1}</span>))
              }
            </div>
          </pre>
          :
          'N/a'
        }
      </div>
    </details>
  );

}

export default HelperItem;
