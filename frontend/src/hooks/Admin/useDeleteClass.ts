function useDeleteClass() {
  async function deleteClass(classId: string) {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/deleteClass`, {
      method: "POST",
      body: JSON.stringify({
        classId: classId,
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return { deleteClass };
}
export default useDeleteClass;
