const withAuthLayout = (WrappedComponent) => {
  return function AuthLayout() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6">
        <WrappedComponent />
      </div>
    )
  }
}

export default withAuthLayout