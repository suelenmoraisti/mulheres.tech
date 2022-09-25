/**
 * JavaScript do aplicativo
 * Depende de "jQuery" (https://jquery.com/)
 *
 * OBS: Este é o aplicativo principal, para que o tema (template) do site
 * opere. Posteriormente, quando necessário, cada página (conteúdo) terá seu
 * próprio JavaScript, assim, somente o JavaScript necessário será carregado.
 *
 * Para saber mais:
 *   • https://www.w3schools.com/js/
 *   • https://www.w3schools.com/jsref/
 *   • https://www.w3schools.com/jquery/
 */

// Executa aplicativo "runApp" quando o documento estiver pronto
$(document).ready(runApp);

function runApp() {
  // Limpa mensagens do console
  console.clear();

  // Exibe uma mensagem no console do navegador
  console.log("Mulheres.Tech");
}
