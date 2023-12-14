import { Link } from "react-router-dom"
import IllustrationImg from "../../assets/images/illustration.svg"
import LogoImg from "../../assets/images/logo.svg"
import { Button } from './../../components/button/index';
import "../../styles/Auth.scss"
//import { useAuth } from "../../hooks/auth";
//import { useContext } from "react";
//import { AuthContext } from './../../context/AuthContext';

export function NewRoom() {

    //const { user } = useAuth()

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
                    <h2>Criar uma nove sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link> </p>
                </div>
            </main>
        </div>
    )
}