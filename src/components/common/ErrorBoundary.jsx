import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-center">
          <h2 className="text-red-600 font-semibold">
            Something went wrong ⚠️
          </h2>
          <p className="text-sm text-gray-500">
            Please try refreshing the page
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-3 px-3 py-1.5 text-xs text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
