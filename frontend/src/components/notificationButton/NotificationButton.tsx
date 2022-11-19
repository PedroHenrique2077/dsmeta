import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/Vector.svg'
import { BASE_URL } from '../../utils/request';
import './Styles.css'

type Props = {
    saleId: number;
}

//função que manda a notificação de acordo com o Id passado
function handleClick(id:number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            // o toast é responsavel pela menssagem que aparece assim que o botão é clicado
            // a tag do mesmo esta no inicio de App.tsx
            toast.info("SMS enviado com sucesso!")
    })
}

function NotificationButton({saleId}:Props){

    return(
        <div className ="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src ={icon} alt ="Notificar"/>
        </div>
    )

}

export default NotificationButton