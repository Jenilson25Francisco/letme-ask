import IllustrationImg from "../../assets/images/illustration.svg"
import LogoImg from "../../assets/images/logo.svg"
import GoogleIconImg from "../../assets/images/google-icon.svg"

export function Home() {
    return (
        <div>
            <aside>
                <img src={IllustrationImg} alt="illustration image" />
                <strong>Crie salas de Q&A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={LogoImg} alt="letmeask" />
                    <button>
                        <img src={GoogleIconImg} alt="logo do google" />
                        crie sua sala com o Google
                    </button>
                    <div>
                        Ou entre em uma sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}