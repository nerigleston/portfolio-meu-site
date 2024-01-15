import { useState, useEffect } from "react";
import Loading from "../loading";
import { useTheme } from '../ui/theme-provider';

interface Certificado {
  certificadoimg: string;
  instituicao: string;
  materia: string;
  data: string;
  curso: string;
}

function APICertificados() {
  const [certificados, setCertificados] = useState<Certificado[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 9;
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';

  useEffect(() => {
    async function fetchCertificados() {
      try {
        const response = await fetch("https://meuportifolioapi-production.up.railway.app/certificados");
        const data: Certificado[] = await response.json();
        setCertificados(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar certificados:", error);
        setLoading(false);
      }
    }

    fetchCertificados();
  }, []);

  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = certificados.slice(indexOfFirstCertificate, indexOfLastCertificate);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={`container mx-auto my-8 ${isDarkTheme === 'dark' ? 'dark' : 'light'}`}>
      <div className="mb-4 text-center">
        <a href="https://www.linkedin.com/in/nerigleston/details/certifications/" className={`text-4xl font-bold ${isDarkTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
          Meus Certificados
        </a>
      </div>
      <div className="flex justify-center items-center text-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {currentCertificates.map((certificado, index) => (
              <div key={index} className={`bg-gray-300 dark:bg-gray-800 p-6 rounded-lg shadow-md ${isDarkTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                <img src={certificado.certificadoimg} alt={`Certificado ${certificado.curso}`} className="w-full h-40 object-cover mb-4 rounded-md" />
                <p className="text-lg font-bold mb-2">Instituição: {certificado.instituicao}</p>
                <p className={`mb-2 ${isDarkTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Competências: {certificado.materia}</p>
                <p className={`mb-2 ${isDarkTheme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Data: {certificado.data}</p>
                <p className={`${isDarkTheme === 'dark' ? 'text-blue-400' : 'text-blue-500'}`}>Curso: {certificado.curso}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-center space-x-4">
          {[...Array(Math.ceil(certificados.length / certificatesPerPage)).keys()].map((pageNumber) => (
            <span
              key={pageNumber + 1}
              className={`cursor-pointer text-lg font-bold ${pageNumber + 1 === currentPage ? `${isDarkTheme === 'dark' ? 'text-blue-400' : 'text-blue-500'}` : `${isDarkTheme === 'dark' ? 'text-white' : 'text-gray-700'}`
                }`}
              onClick={() => paginate(pageNumber + 1)}
            >
              {pageNumber + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default APICertificados;
