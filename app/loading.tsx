import LoadingSpinner from './components/LoadingSpinner';

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#000000'
    }}>
      <LoadingSpinner />
    </div>
  );
}

