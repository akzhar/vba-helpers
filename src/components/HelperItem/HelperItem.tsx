import React, { useEffect } from 'react';
import { THelper } from '@services/Api';

import Anchor from '@components/Anchor';
import { AppRoutes, HelperLinks } from '@consts/const';

type THelperItemProps = {
  helper: THelper,
  open: boolean
};

const HelperItem: React.FC<THelperItemProps> = ({helper, open: isOpen}) => {

  const codeLinesCount = (helper.usage.match(/\n/g)||[]).length + 1;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Property 'hljs' does not exist on type 'Window & typeof globalThis'
    const hljs = window.hljs;
    // https://github.com/dullin/highlightjs-vba does paste html in code
    hljs.configure({ ignoreUnescapedHTML: true, languages:['xml'] });
    hljs.highlightAll();
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
            <a href={`${HelperLinks.VIEW}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="12" height="12"><use xlinkHref="#eye" /></svg>
              <span>Смотреть код</span>
            </a>
            <a href={`${HelperLinks.RAW}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="12" height="12"><use xlinkHref="#script" /></svg>
              <span>{`Файл ${helper.file.slice(helper.file.indexOf('.'))}`}</span>
            </a>
          </div>
        </div>
        <div className="helper__column">
          <h3 className="helper__header">Описание</h3>
          <p
            className="helper__description"
            dangerouslySetInnerHTML={
              /*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/
              /*@ts-ignore: Property 'marked' does not exist on type 'Window & typeof globalThis'*/
              {__html: `<p>${helper.title}</p>${helper.description ? window.marked.parse(helper.description) : ''}`}
            }>
          </p>
        </div>
      </div>
      <div className="helper__example">
        <h3 className="helper__header">Пример использования</h3>
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
          'Нет'
        }
      </div>
    </details>
  );

}

export default HelperItem;
