import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { THelper } from '@services/Api';
import copyText from '@utils/copyText';
import capitalize from '@utils/capitalize';

import Tooltip from '@components/Tooltip';
import Button from '@components/Button';
import ActionCreator from '@store/actions';
import { AppRoutes, HelperLinks } from '@consts/const';

type THelperItemProps = {
  helper: THelper,
  isOpen: boolean
};

const HelperItem: React.FC<THelperItemProps> = ({helper, isOpen}) => {

  const dispatch = useDispatch();
  const { origin: originPath } = window.location;

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

  interface ICopyClickHandler {
    name: string,
    text: string
  }

  const copyClickHandler = ({ name, text }: ICopyClickHandler) => {
    const isCopied = copyText(text);
    dispatch(ActionCreator.setInfoMessage({
      label: isCopied ? '😊' : '😭',
      text: isCopied ? `${capitalize(name)} copied` : `${capitalize(name)} doesn't copied`
    }));
    dispatch(ActionCreator.showMessage());
  };

  return (
    <details className="helper" open={isOpen}>
      <summary>
        <Button
          title="Copy link to the helper"
          clickHandler={
            () => copyClickHandler({
              name: 'link',
              text: `${originPath}${AppRoutes.SEARCH}?type=i&query=${helper.id}`
            })
          }
        >
          <svg width="14" height="14">
            <use xlinkHref="#share" />
          </svg>
        </Button>
        <span className="helper__name">{helper.name}</span>
        <div className="helper__help">
          <Tooltip message={helper.title} position="left">
            <svg width="18" height="18"><use xlinkHref="#question" /></svg>
          </Tooltip>
        </div>
      </summary>
      <div className="helper__details">
        <div className="helper__column">
          <ul className="helper__category">
            {
              helper.category.map((el, i) => (<li key={i}>{el.toLowerCase()}</li>))
            }
          </ul>
          <div className="helper__links">
            <a href={`${HelperLinks.CODE}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="14" height="14"><use xlinkHref="#code" /></svg>
              <span>View code</span>
            </a>
            <a href={`${HelperLinks.FILE}/${helper.file}`} target="_blank" rel="noreferrer">
              <svg width="14" height="14"><use xlinkHref="#script" /></svg>
              <span>{`File ${helper.file.slice(helper.file.indexOf('.'))}`}</span>
            </a>
          </div>
        </div>
        <div className="helper__column">
          <div className="helper__header">
            <h3>What it used for</h3>
          </div>
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
              <div className="helper__header">
                <h3>How it works</h3>
              </div>
              <a className="helper__demo" href={`${HelperLinks.DEMO}/${helper.demo}`} target="_blank" rel="noreferrer">
                <img src={`${HelperLinks.DEMO}/${helper.demo}`} alt="demo" />
                <svg width="18" height="18">
                  <use xlinkHref="#zoom" />
                </svg>
              </a>
            </>
          }
        </div>
      </div>
      <div className="helper__example">
        <div className="helper__header">
          <h3>How to use it</h3>
          {
            helper.usage
            &&
            <Button title="Copy example code" clickHandler={
              () => copyClickHandler({
                name: 'example',
                text: helper.usage
              })
            }>
              <svg width="14" height="14">
                <use xlinkHref="#copy" />
              </svg>
            </Button>
          }
        </div>
        {
          helper.usage
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
