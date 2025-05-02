export default function ApplicationLogo(props) {
    return (
        <img
            src={`${window.location.origin}/images/Logo_Politeknik_Negeri_Sambas.png`}
            alt="Logo Politeknik Negeri Sambas"
            className="w-10"
            {...props}
        />
    );
}
