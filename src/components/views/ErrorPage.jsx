import image from '../../assets/image.png';
function ErrorPage() {
    return (
        <div>
            <h1 style={{ position: 'relative' }}>404 NOT FOUND</h1>
            <img src={image} alt="404 not found" />

        </div>
    )
}

export default ErrorPage