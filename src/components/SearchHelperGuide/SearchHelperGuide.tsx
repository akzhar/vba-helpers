import React from 'react';

import DemoImage from '@components/DemoImage';
import Slider from '@components/Slider';
import { DocsLinks, WikiLinks } from '@consts/const'

const SearchHelperGuideDemo1: React.FC = () => (
  <div>
    <p>
      There is a helper to search / import other
      helpers right from Excel <span role="img" aria-label="icon">🤯</span> How do you like it?
    </p>
    <p>The <b>1<small>st</small> option</b> is to call dialog popup (user form) from any worksheet:</p>
    <DemoImage url="./search-helper/demo-form.gif" width="80%" />
  </div>
);

const SearchHelperGuideDemo2: React.FC = () => (
  <div>
    <p>
      The <b>2<small>nd</small> option</b> is to call import directly
      from <a href={DocsLinks.IMMEDIATE_WINDOW} target="_blank" rel="noreferrer">Immediate window</a> (it&apos;s
      something like using a <a href={WikiLinks.CLI} target="_blank" rel="noreferrer">CLI</a>):
    </p>
    <DemoImage url="./search-helper/demo-immediate.gif" width="80%" />
  </div>
);

const SearchHelperGuideStep1: React.FC = () => (
  <div>
    <p>Follow a few simple steps to install (to do only once)</p>
    <p>
      To run the macro from any Excel file on your computer you have
      to <a href={DocsLinks.PERSONAL_XLSB} target="_blank" rel="noreferrer">create Personal Macro Workbook</a>.
      <br/>After creation it&apos;s available in any other Excel file. To create it just record any new macro:
    </p>
    <p><b>Developer</b> → <b>Record Macro</b> → Store macro in <b>Personal Macro Workbook</b></p>
    <DemoImage url="./search-helper/steps/create-personal-xlsb.png" width="64%" />
    <p>Then you can find your <b>PERSONAL.XLSB</b> in one of the following places:</p>
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

const SearchHelperGuideStep2: React.FC = () => (
  <div>
    <p>
      To allow the macro to interact with VBA project objects you have
      to <a href={DocsLinks.TRUST_ACCESS_VBOM} target="_blank" rel="noreferrer">enable the appropriate option</a> in
      Excel&apos;s Trust Сenter settings
    </p>
    <DemoImage url="./search-helper/steps/trust-access-vbom.png" width="64%" />
  </div>
);


const SearchHelperGuideStep3: React.FC = () => (
  <div>
    <p>
      <a href="./search-helper/VbaHelpers.zip" download>Download zip</a> and exctract the files.
      <br/>Import the exctracted files (<b>.bas</b> and <b>.frm</b>) into the VBAProject of <b>PERSONAL.XLSB</b>:
    </p>
    <p><b>Developer</b> → <b>Visual Basic</b> → Select <b>PERSONAL.XLSB</b> → <b>File</b> → <b>Import File...</b></p>
    <DemoImage url="./search-helper/steps/import-module.png" width="34%" />
  </div>
);

const SearchHelperGuideStep4: React.FC = () => (
  <div>
    <p>To quickly call the macro from any Excel worksheet it&apos;s handy to set a shortcut</p>
    <p>
      <b>Developer</b> → <b>Macros</b> → Select the
      macro <b>HelpersFormOpen</b> → <b>Options</b> → Set shortcut (e.g. <b>Ctrl + q</b>) → OK
    </p>
    <DemoImage url="./search-helper/steps/set-shortcut.png" width="84%" />
  </div>
);

const SearchHelperGuideStep5: React.FC = () => (
  <div>
    <p>
      Congrats! <span role="img" aria-label="icon">🥂</span> That&apos;s all
      you need to do. Just close the file <span role="img" aria-label="icon">❌</span>.
    </p>
    <p>You will be prompted to save changes in <b>Personal Macro Workbook</b> → click <b>Save</b></p>
    <DemoImage url="./search-helper/steps/save-personal-xlsb.png" width="34%" />
  </div>
);

const SearchHelperGuide: React.FC = () => (
  <section className="search-helper">
    <Slider items={[
      { title: 'How it works - form', node: <SearchHelperGuideDemo1 /> },
      { title: 'How it works - immediate', node: <SearchHelperGuideDemo2 /> },
      { title: 'Step 1 - personal book', node: <SearchHelperGuideStep1 /> },
      { title: 'Step 2 - trust access', node: <SearchHelperGuideStep2 /> },
      { title: 'Step 3 - add code', node: <SearchHelperGuideStep3 /> },
      { title: 'Step 4 - set shortcut', node: <SearchHelperGuideStep4 /> },
      { title: 'Step 5 - save', node: <SearchHelperGuideStep5 /> }
    ]} />
  </section>
);

export default SearchHelperGuide;
