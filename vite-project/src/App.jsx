import React from 'react';

function AppContent() {
    return (
        <div className="App">
            {/* Seção principal com vídeo de fundo */}
            <section className="main-section">
                <video autoPlay loop muted className="background-video">
                    <source src="academia.Mp4" type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
                <div className="overlay">
                    <h1>SEJAM BEM-VINDOS AO OLIMPO!</h1>
                    <div className="buttons">
                        <button className="button">Cadastrar</button>
                        <button className="button">Produtos</button>
                    </div>
                </div>
            </section>

            {/* Seção 1 */}
            <section className="section">
                <h2>Força, foco, disciplina</h2>
                <p>A motivação está dentro de você!</p>
                <div className="image-gallery">
                    <img src="imagem1.jpg" alt="Imagem 1" />
                    <img src="imagem2.jpg" alt="Imagem 2" />
                    <img src="imagem3.jpg" alt="Imagem 3" />
                </div>
            </section>

            {/* Seção 2 */}
            <section className="section">
                <h2>No OLIMPO, cada treino é um desafio</h2>
                <p>Se desafie e evolua com a gente!</p>
                <div className="content-box">
                    <img src="imagem4.jpg" alt="Imagem 4" />
                </div>
            </section>

            {/* Seção 3 */}
            <section className="section">
                <h2>Equipe OLIMPO</h2>
                <div className="team-photos">
                    <img src="membro1.jpg" alt="Membro 1" />
                    <img src="membro2.jpg" alt="Membro 2" />
                </div>
            </section>

            {/* Seção 4 */}
            <section className="section">
                <h2>Motivação e Resultados</h2>
                <p>Conquiste o seu melhor com a nossa equipe de treinadores especializados!</p>
                <img src="imagem5.jpg" alt="Imagem da academia" className="full-width-image" />
            </section>

            {/* Rodapé */}
            <footer className="footer">
                <h2>OLIMPO</h2>
            </footer>
        </div>
    );
}

export default AppContent;
