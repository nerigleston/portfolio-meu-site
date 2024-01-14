export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Nerigleston Filho</h1>
          <p className="text-lg">
            Recentemente, iniciei minha jornada na programação, movido pela curiosidade,
            e estou entusiasmado em explorar diversas áreas. Já desenvolvi um projeto full stack
            utilizando Node.js para o backend, React (com Tailwind CSS) para frontend e MongoDB
            para banco de dados, respectivamente. Implementei autenticação com tokens JWT e utilizei
            o AuthContext do React para proteger as rotas. Além disso, explorei a automação em engenharia
            civil com Python e PyRevit para otimizar tarefas em modelagem e documentação no Revit.
            Também criei um projeto em PHP com MySQL, incluindo autenticação de usuário e uma calculadora
            de juros dinâmica em JavaScript. Estou constantemente buscando novos conhecimentos e desafios
            na programação.
          </p>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Formação Acadêmica</h1>
          <p className="text-lg mb-2">Unipê - Centro Universitário de João Pessoa</p>
          <p className="text-lg">Análise e Desenvolvimento de Sistemas • (agosto de 2023 - agosto de 2025)</p>
        </div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Habilidades</h1>
          <ul className="flex flex-col">
            <li className="text-lg">Responsável</li>
            <li className="text-lg">Comunicativo</li>
            <li className="text-lg">Proativo</li>
            <li className="text-lg">Trabalho em equipe</li>
            <li className="text-lg">Adaptabilidade</li>
            <li className="text-lg">Organização</li>
          </ul>
        </div>
      </div>
    </>
  );
}
