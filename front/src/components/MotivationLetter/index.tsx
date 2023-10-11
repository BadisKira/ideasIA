import { useState } from "react";
import Letter from "./Letter";
import Personal from "./PersonalInformation";
import Post from "./Post";
import axios from "axios";

type MessageType = {
    role: "system" | "user" | "assistant",
    content: string
}



const defaultPersonalInfo: string = `

1. **Introduction** :
   - Candidature spontanée pour le poste de développeur web Full stack dans l'entreprise de conseil.

2. **Parcours académique et compétences** :
   - Étudiant en Master 2 en génie de l'informatique logicielle à l'université de Rouen.
   - Compétences solides en développement web, notamment en JavaScript et TypeScript.
   - Compréhension approfondie du processus de développement logiciel.

3. **Qualités personnelles** :
   - Flexibilité, réactivité et orientation vers les résultats.

4. **Motivation** :
   - Enthousiasme à l'idée de collaborer avec des professionnels expérimentés.
   - Intérêt pour les technologies de pointe et les méthodologies innovantes.
   - Objectif de renforcer les compétences en travail d'équipe.

5. **Raison de l'alternance** :
   - L'alternance est la prochaine étape logique dans le parcours académique et professionnel.
   - Conviction que cette expérience permettra d'appliquer les connaissances académiques dans un environnement professionnel stimulant.

6. **Disponibilité** :
   - Disponible pour fournir des informations complémentaires et pour un entretien.

7. **Conclusion** :
   - Remerciements pour l'attention portée à la candidature.
   - Expression de l'espoir de rejoindre l'entreprise.

Ne redige pas de lettre de motivation mais process et garde les ces informations pour les utiliser dans le prochain message pour creer la lettre 
`;

const defaultPost: string = `Les missions du poste
En tant qu'alternant.e Fullstack Développeur(se), tu intégreras l'équipe Tech de PlayPlay.

Encadré(e) par un(e) senior développeur(se), ta mission sera de développer des interfaces complexes associées à des architectures back-end solides et scalables et de contribuer à faire de PlayPlay le leader mondial de la création vidéo ! Tu as envie de trouver une entreprise où la performance du produit est au coeur du business model ? Tu as envie de travailler sur un produit vraiment innovant ?

N'hésite plus à postuler !

TES MISSIONS

Développements
- Participer à la construction end-to-end de l'expérience de création vidéo PlayPlay, des interfaces utilisateurs (Vue.js, Vuex, TypeScript) jusqu'aux appels API et au rendu vidéo côté back-end (PHP/Laravel, Node.js)

Contribution à la conception de PlayPlay
- Participer à la phase amont du développement (user tests, designs reviews...).
- Participer aux séances de conception technique (architecture, modèle de données, workflow de génération de vidéo...).
- Être force de proposition sur l'amélioration continue du code.

Animation de l'amélioration de notre stack technique
- Participer aux revues de code et développer des tests unitaires et fonctionnels.
- Garantir le maintien d'un haut niveau de performance et de qualité.
- Si tu es intéressé(e) tu pourras également participer à l'amélioration de notre déploiement cloud.

TES COMPÉTENCES
- Tu suis une formation d'ingénieur en développement logiciel ou un domaine proche
- Tu as une première expérience en développement web
- Tu maîtrises les concepts de la programmation orientée objet et du testing
- Tu as un fort sens des responsabilités et tu aimes résoudre des problèmes avec des solutions technologiques
- Tu as une bonne maîtrise de l'anglais et es capable de travailler dans un environnement international

À PROPOS DE TOI

Passionné(e) : Tu es attentif(ve) à la qualité de code (architecture, bonnes pratiques, tests automatisés...)

Curieux(se) : Tu as envie d'apprendre et de te confronter à des sujets innovants !

Team Player : Tu aimes travailler en équipe pour faire avancer un projet.

Proactif(ve) : Tu prends des initiatives et tu es force de proposition.

Bienvenue chez PlayPlay
Qui sont-ils ?
PlayPlay est la plateforme de création vidéo dédiée aux équipes marketing et communication pour transformer leurs messages en vidéos engageantes.

Depuis 2017, PlayPlay connaît une croissance exponentielle :
- 2500 clients (dont les deux tiers du CAC40) ;
- 230+ employés à Paris, New York et Berlin ;
- 65 M$ levés (séries A et B) ;
- Membre de la French Tech 120 et #26 dans le Top100 des Scale-up B2B montantes en Europe par Sifted !

PlayPlay est l'entreprise qu'il te faut si tu veux :
- Rejoindre une scale-up qui te permet de t'investir dans de multiples projets
- Travailler sur un produit aimé de nos clients (68+ NPS) et en constante amélioration
- Évoluer dans un environnement mêlant ambition, dynamisme, humilité, transparence et travail d'équipe (notre note de 4.6/5 sur Glassdoor en est la preuve !)
- Profiter des activités organisées par l'équipe Happiness (Quiz musicaux, concerts, soirées, etc.)
- Travailler selon un modèle hybride avec 3 jours de travail à domicile par semaine et 4 semaines de full-remote par an (dans tout pays avec un décalage horaire de 3 heures ou moins).

Nous sommes soutenus par des investisseurs de premier plan tels que Insight Partners (HubSpot, Twitter), Balderton (Revolut, Aircall) et Point9 (Loom, Zendesk) qui nous aident à devenir le leader mondial de la création vidéo. Et pour y parvenir, nous recherchons les meilleurs talents du marché !"`

const MotivationLetter: React.FC = () => {
    // prompt 1 : 
    const prompt1 = ` Voici les information qui sont essentiels pour mon profil et qui seront utile pour ma lettre de motivation`;
    const prompt2 = `Voici un post pour une alternance ecris pour moi  en prenant en compte les points essentiels indiqué  dans le messaage precedant ecris pour moi une lettre de motivation personnalise`
    

    const [post, setPostInfo] = useState<string>(defaultPost);
    const [personalInfo, setPersonalInfo] = useState<string>(defaultPersonalInfo);

    const [loading, setLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<Array<MessageType> | undefined>();

    const [data,setData]=useState<string>("")

    
    const handleSend = async () => {
        // en deux temps
        // premierement lecture de mes points essentiels 
       
        
        if (post === "" || personalInfo === "") {
            alert("Faut tous remplir")
            return;
        }
        const processMyInformation: MessageType = { role: "user", content: prompt1+"\n"+ personalInfo.toString()};
        const letterGenerationMessage: MessageType = { role: "user",content:prompt2 + "\n" + post.toString() };
        
        const updatedMessages = messages === undefined ? [processMyInformation, letterGenerationMessage] : [...messages, processMyInformation, letterGenerationMessage]
        setMessages(updatedMessages);
        setLoading(true)
        const response = await axios.post("http://localhost:5000/text-generation", {
            messages: updatedMessages
        });

        const res1 = await response;
        setLoading(false);
        setData(res1.data.content)
        setMessages(prev => {
            if (prev !== undefined)
                return [...prev, res1.data]
        });

/**
 * 
        // creation de la lettre de motivation
        
        const letterGenerationMessage: MessageType = { role: "user", content: prompt2 + post };
        // const letterMessages = messages === undefined ? [letterGenerationMessage] : [...messages, letterGenerationMessage]
        // setMessages(updatedMessages);
        setLoading(true)
        const response2 = await axios.post("http://localhost:5000/text-generation", {
            messages: letterGenerationMessage
        });


        const res2 = await response2;
        setLoading(false);
        setMessages(prev => {
            if (prev !== undefined)
                return [...prev, res2.data]
        });


        console.log(messages)
 */

    }; 

    


    const ReloadLetter = () => {

    }

    return (
        <div className={"w-10/12 space-y-1 mx-auto "}>
            <div className={'flex items-center justify-between'}>
                <h2 className={`
                        text-2xl 
                        text-white
                        pt-6
                    `}>Letter de Motivation</h2>
                </div>
            <div className="flex flex-col justify-start space-y-1">
                <Personal personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
                <Post post={post} setPostInfo={setPostInfo} />
            
                <button onClick={handleSend} className="inline-flex items-center mb-2 px-5 py-2.5 w-32 text-sm font-medium text-center text-white bg-blue-700 rounded-lg active:scale-90 transition-transform duration-75 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Create Letter
                </button>
                <Letter data={data} setData={setData} loading={loading} />
           </div>
        </div>

    )

};

export default MotivationLetter; 