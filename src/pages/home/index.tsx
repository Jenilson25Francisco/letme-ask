//import { useNavigation } from "react-router-dom";
import IllustrationImg from "../../assets/images/illustration.svg"
import { useNavigate } from "react-router-dom"
import LogoImg from "../../assets/images/logo.svg"
import GoogleIconImg from "../../assets/images/google-icon.svg"
import "../../styles/Auth.scss"
import { Button } from './../../components/button/index';
import { useAuth } from "../../hooks/auth"


export function Home() {

    const { user, singInWithGoogle } = useAuth()
    const history = useNavigate();

    async function handleCreateRoom() {
        if (!user) {
            await singInWithGoogle()
        }
        history("/rooms/new")
    }

    return (
        <div className="page-auth">
            <aside>
                <img src={IllustrationImg} alt="illustration image" />
                <strong>Crie salas de Q&A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={GoogleIconImg} alt="logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separetor">
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}