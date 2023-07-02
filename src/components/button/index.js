
export default ({ className, children}) => {
    return(
        <>
            <div onClick={ () => {
                alert('Olá, mundo')
            }} className={className}>
                {children}
            </div>
        </>
    );
}