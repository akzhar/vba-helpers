import React from 'react';

import DemoImage from '@components/DemoImage';
import Slider from '@components/Slider';
import { DocsLinks } from '@consts/const'

const SearchHelperGuideDemo: React.FC = () => (
  <div>
    <p>
      There is a helper to search / import other
      helpers right from Excel <span role="img" aria-label="icon">🤯</span> How do you like it?
    </p>
    <DemoImage url="./search-helper/demo.gif" width="64%" />
    <p>Follow the steps to install it (to do only once)</p>
  </div>
);

const SearchHelperGuideStep1: React.FC = () => (
  <p><a href="./search-helper/VbaHelpers.zip" download>Download zip</a> and exctract the files</p>
);

const SearchHelperGuideStep2: React.FC = () => (
  <div>
    <p>Import all the exctracted files (<b>.bas</b> and <b>.frm</b>) into VBA project</p>
    <p><b>Developer</b> → <b>Visual Basic</b> → <b>File</b> → <b>Import File...</b></p>
    <DemoImage url="./search-helper/steps/import-module.png" width="34%" />
  </div>
);

const SearchHelperGuideStep3: React.FC = () => (
  <div>
    <p>Move imported files (2 modules and 1 form) to <b>Personal.xlsb</b> workbook</p>
    <DemoImage url="./search-helper/steps/move-module.png" width="34%" />
    <p>You may have to <a href={DocsLinks.PERSONAL_XLSB} target="_blank" rel="noreferrer">create it</a> first</p>
    <p>Just record a new macro (<b>Developer</b> → <b>Record Macro</b>) and select <b>Personal Macro Workbook</b></p>
    <DemoImage url="./search-helper/steps/create-personal-xlsb.png" width="64%" />
    <p>Then you can find your <b>Personal.xlsb</b> in one of the following places:</p>
    <ul style={{wordWrap: 'break-word'}}>
      <li><i>C:\Program Files\Microsoft Office\Office12\XLSTART</i></li>
      <li><i>C:\Documents and Settings\Computer\Application Data\Microsoft\Excel\XLSTART</i></li>
      <li><i>%USERPROFILE%\AppData\Roaming\Microsoft\Excel\XLSTART</i></li>
      <li>
        You can
        use <b>?Application.StartupPath</b> command
        in <a href={DocsLinks.IMMEDIATE_WINDOW} target="_blank" rel="noreferrer">Immediate window</a> to
        check the actual path
      </li>
    </ul>
  </div>
);

const SearchHelperGuideStep4: React.FC = () => (
  <div>
    <p>Set shortcut to quickly call the macro right from Excel worksheet</p>
    <p>
      <b>Developer</b> → <b>Macros</b> → select the
      macro → <b>Options</b> → Set shortcut (e.g. <b>Ctrl + q</b>) → <b>OK</b>
    </p>
    <DemoImage url="./search-helper/steps/set-shortcut.png" width="84%" />
  </div>
);

const SearchHelperGuideStep5: React.FC = () => (
  <div>
    <p>Once you done, just close the file <span role="img" aria-label="icon">❌</span></p>
    <p>You will be prompted to save changes in Personal Macro Workbook → click <b>Save</b></p>
    <DemoImage url="./search-helper/steps/save-personal-xlsb.png" width="34%" />
  </div>
);

const SearchHelperGuide: React.FC = () => (
  <section className="search-helper">
    <Slider items={[
      { title: 'How it works', node: <SearchHelperGuideDemo /> },
      { title: 'Step 1 - download', node: <SearchHelperGuideStep1 /> },
      { title: 'Step 2 - import', node: <SearchHelperGuideStep2 /> },
      { title: 'Step 3 - personal book', node: <SearchHelperGuideStep3 /> },
      { title: 'Step 4 - set shortcut', node: <SearchHelperGuideStep4 /> },
      { title: 'Step 5 - save', node: <SearchHelperGuideStep5 /> }
    ]} />
  </section>
);

export default SearchHelperGuide;
