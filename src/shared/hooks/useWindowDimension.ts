function useWindowDimensions() {
    const { innerHeight: height, innerWidth: width } = window;
    return({height, width});
}

export default useWindowDimensions;