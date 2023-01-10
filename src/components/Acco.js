import Accordion from 'react-bootstrap/Accordion';
import BeachDay from '../components/BeachDay'
import RussConcert from '../components/RussConcert'
import DinoMuseum from '../components/DinoMuseum'
import Sitzler from '../components/SitzlerWedding'
import EmpireState from '../components/EmpireState'
import BlcGrad from '../components/BlcGrad'
import BayArea from '../components/BayArea'
import BigTree from '../components/BigTree'
import KoreaLove from '../components/Korea'
import ILoveBoba from '../components/ILoveBoba'
import Pink from '../components/Pink'
import Pikachu from '../components/Pikachu'
import Elephant from '../components/Elephant'
import Guns from '../components/Guns'
import CWedding from '../components/ChristineWedding'
import Big26 from '../components/Big26'
import Fam from '../components/Fam'
import Reynolds from '../components/Reynolds'
import PaoWedding from '../components/PaoWedding'

function Acco() {
  return (
    <Accordion className='acco' style={{margin: '15px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='acco' style={{fontFamily: 'Motley'}}>2017</Accordion.Header>
        <Accordion.Body className='pictures2'>
            {/* <div className='pictures2'> */}
          <BeachDay />
          <RussConcert />
          <DinoMuseum />
          <Sitzler />
          <EmpireState />
          {/* </div> */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontFamily: 'Motley'}}>2018</Accordion.Header>
        <Accordion.Body>
          <div className='pictures2'>
            <BlcGrad />
            <BayArea />
            <BigTree />
            <KoreaLove />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header style={{fontFamily: 'Motley'}}>2019</Accordion.Header>
        <Accordion.Body>
           <div className='pictures2'>
                <ILoveBoba />
                <Pink />
                <Pikachu />
           </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header style={{fontFamily: 'Motley'}}>2020</Accordion.Header>
        <Accordion.Body>
          <div className='pictures2'>
            <Elephant />
            <Guns />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header style={{fontFamily: 'Motley'}}>2021</Accordion.Header>
        <Accordion.Body>
          <div className='pictures2'>
            <CWedding />
            <Big26 />
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header style={{fontFamily: 'Motley'}}>2022</Accordion.Header>
        <Accordion.Body>
          <div className='pictures2'>
            <Fam />
            <Reynolds />
            <PaoWedding />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Acco;