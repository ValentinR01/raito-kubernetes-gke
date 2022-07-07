import PageContentTemplate from 'components/templates/PageContentTemplate/PageContentTemplate';
import React  from 'react'

import AmbiancesStyle from './Ambiances.style';
import { ambiancesList } from './DataAmbiances';
import { useNavigate } from 'react-router';

const Ambiances = () => {





  const navigate = useNavigate();
  const handleClick = (props) => {
    navigate(`/step2/${props}`, { replace: true });
  };

  const ShowAllAmbianceData =  ambiancesList.map((element) => {

    return (
            <div  className="card-body" key={element.id} onClick={() => handleClick(element.id)} >
                <div className="card-illustration">
                {element.illustration}

                </div>
                <div className="text-and-icon">
                   <div class="card-text-area">
                       <h5  className="card-title">{element.title}</h5>              
                       <p  className="card-text">{element.author}</p>
                    </div>
                    <div className="card-icon"> {element.icon}  </div>
                </div>
            </div>
         
    )
  })


  return (
      <AmbiancesStyle>
          <h1>Ambiances</h1>
          <PageContentTemplate>


          <div className="all-cards" >
          {ShowAllAmbianceData}
          </div>  
          </PageContentTemplate>

      </AmbiancesStyle>
    
  
  )
}

export default Ambiances ;