const objToFormData = obj=> { 
  const formData = new FormData();
  if (obj != null) {
    for (const id in obj) {
      if ((typeof obj[id]) !== "undefined") {
        formData.append(id, obj[id]);
      }
    }
  }
  return formData;
}

export default objToFormData;
