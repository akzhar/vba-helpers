import React, { useEffect } from 'react';
import { THelper } from '@services/Api';

import Anchor from '@components/Anchor';
import { AppRoutes, HelperLinks } from '@consts/const';

const HelperItem: React.FC<THelper> = (helper: THelper) => {

  const codeLinesCount = (helper.usage.match(/\n/g)||[]).length + 1;
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Property 'hljs' does not exist on type 'Window & typeof globalThis'
    const hljs = window.hljs;
    hljs.configure({ ignoreUnescapedHTML: true }); // https://github.com/dullin/highlightjs-vba does paste html in code
    hljs.highlightAll();
  }, []);

  return (
    <details className="helper">
      <summary>
        <span className="helper__name">{helper.name}</span>
        {/* TODO: direct link to the helper by id */}
        <Anchor url={`${AppRoutes.SEARCH}?id=${helper.id}`} aria-label="Link to the helper"/>
      </summary>
      <div className="helper__details">
        <div className="helper__details-column">
          <ul className="helper__category">
            {
              helper.category.map((el, i) => (<li key={i}>{el}</li>))
            }
          </ul>
          {/* <span className="helper__category">{`${helper.category.join(' | ')}`}</span> */}
          <span className="helper__links">
            <a href={`${HelperLinks.VIEW}/${helper.file}`} target="_blank" rel="noreferrer">
              <span>View code</span><svg width="16" height="16"><use xlinkHref="#eye" /></svg>
            </a>
            <a href={`${HelperLinks.RAW}/${helper.file}`} target="_blank" rel="noreferrer">
              <span>Open .bas file</span><svg width="16" height="16"><use xlinkHref="#script" /></svg>
            </a>
          </span>
        </div>
        <div className="helper__details-column">
          <h3>Описание</h3>
          <p>{helper.title}</p>
          <p>{helper.description}</p>
        </div>
        <div className="helper__details-column">
          <h3>Пример использования</h3>
          {
            helper.usage.length
            ?
            <pre className="helper__example">
              <div className="helper__code-lines">
                {
                  new Array(codeLinesCount).fill(0).map((_n, i) => (<span key={i}>{i + 1}</span>))
                }
              </div>
              <code className="language-vba">
                {helper.usage}
              </code>
            </pre>
            :
            'N/A'
          }
        </div>
      </div>
    </details>
  );

}

export default HelperItem;
