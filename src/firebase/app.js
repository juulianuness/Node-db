import { cert, initializeApp } from 'firebase-admin/app'; //importada do firebase
import ServiceAccount from "../../serveceAccount.json" with {type: "json"}; // vai pegar o conteudo do service e transformar em json 

const app = initializeApp({ // funcão que recebe as infos do app ja em json 
    credential: cert(ServiceAccount) // converte o json para credencial de acesso ao firebase
}); // da start no projeto do firebase, atraves dele eu acesso o BD firebase, recursos...

export default app; // faz a conecção com todos os arquivos do firebase



// o serviceAccount tem informações extremamente sensiveis e que não podem ser compartilhadas (principalmente a key e o id)