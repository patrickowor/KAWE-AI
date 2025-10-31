export function useExternalNav() {
    return (url : string)=> {
        // window.location.href = url; 
        window.open(url, "_blank", "noopener,noreferrer");
    }
}