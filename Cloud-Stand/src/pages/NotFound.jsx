import Button from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'

function NotFound() {
  useDocumentTitle('404 | CloudStand Consulting')
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 pt-20">
      <div className="text-center">
        <div className="font-syne text-8xl font-extrabold text-accent sm:text-[10rem]">404</div>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 max-w-xl text-base leading-8 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8">
          <Button size="lg" to="/" variant="solid">
            Go Home
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
