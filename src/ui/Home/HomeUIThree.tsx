import  {stepsData} from '../../lib/assets/data'
import ExpertiseMethodology from '../Share/ExpertiseMethodology'

const HomeUiThree = ()=>{

    return(
        <>
           <ExpertiseMethodology heading="Notre méthodologie d'expertise" steps={stepsData}/>
        </>
    )
}

export default HomeUiThree