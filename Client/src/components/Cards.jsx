import Card from "./Card";
import { ErrorBoundary } from "react-error-boundary";

function catchError({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <img src="../assets/image.png" />
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default function Cards({ characters, onClose }) {
  return (
    <ErrorBoundary FallbackComponent={catchError}>
      <div>
        {
          characters?.map(({ id, name, status, species, gender, origin, image }) => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin}
                image={image}
                onClose={onClose} />

            )
          })}
      </div>
    </ErrorBoundary>
  );
}
