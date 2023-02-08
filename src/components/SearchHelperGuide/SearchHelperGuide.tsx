import React from 'react';

import DemoImage from '@components/DemoImage';
import Slider from '@components/Slider';
import { DocsLinks } from '@consts/const'

const SearchHelperGuideDemo: React.FC = () => (
  <div>
    <p>You will be able to call a search dialog right from Excel</p>
    <p>So it&apos;s a helper to search other helpers <span role="img" aria-label="icon">🤯</span></p>
    <DemoImage url="./search-helper/demo.gif" width="64%" />
  </div>
);

const SearchHelperGuideStep1: React.FC = () => (
  <p><a href="./search-helper/VbaHelpers.bas" download>Download</a> the module</p>
);

const SearchHelperGuideStep2: React.FC = () => (
  <div>
    <p>Import the module into VBA project</p>
    <p><b>Developer</b> → <b>Visual Basic</b> → <b>File</b> → <b>Import File...</b></p>
    <DemoImage url="./search-helper/steps/import-module.png" width="34%" />
  </div>
);

const SearchHelperGuideStep3: React.FC = () => (
  <div>
    <p>Move imported module to <b>Personal.xlsb</b> workbook</p>
    <DemoImage url="./search-helper/steps/move-module.png" width="34%" />
    <p>You may have to <a href={DocsLinks.PERSONAL_XLSB} target="_blank" rel="noreferrer">create it</a> first:
    just record a new macro (<b>Developer</b> → <b>Record Macro</b>) and use Personal Macro Workbook to store it</p>
    <DemoImage url="./search-helper/steps/create-personal-xlsb.png" width="64%" />
    <p>You can find your <b>Personal.xlsb</b> in one of the following places:</p>
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
    <p>Set shortcut (e.g. <b>Ctrl + q</b>) to run the macro</p>
    <p><b>Developer</b> → <b>Macros</b> → select the macro → <b>Options</b></p>
    <DemoImage url="./search-helper/steps/set-shortcut.png" width="84%" />
  </div>
);

const SearchHelperGuideStep5: React.FC = () => (
  <div>
    <p>During exit the file you will be asked about changes in Personal Macro Workbook → click <b>Save</b></p>
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
