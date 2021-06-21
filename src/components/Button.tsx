// Usando typescript para especificar o tipo dos parâmetros recebidos pelo 
// componente
type ButtonProps = {
  // '?' indica um parâmetro opcional
  children?: string;
  text?: string;
}

// 'props: ButtonProps' indicia o tipo do parâmetro 'props'
export function Button(props: ButtonProps) {
  return (
    <button>{props.children || props.text || "Default text"}</button>
  );
}