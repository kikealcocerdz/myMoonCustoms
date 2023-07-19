export function Contact() {
  return (
    <div name='contact' className="flex justify-center items-center">
    <form className="items-center justify-center text-center flex-col">
      <h2 className="text-4xl text-center">Contacto</h2>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Correo electrónico:</label>
        <input type="email" id="email" name="email" className="form-input" required />
      </div>

      <div className="form-group">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" id="name" name="name" className="border-blue-900 border-[3px]" required />
      </div>

      <div className="form-group">
        <label htmlFor="proposal" className="form-label">Propuesta:</label>
        <textarea id="proposal" name="proposal" className="form-textarea" required />
      </div>

      <button type="submit" className="form-submit">Enviar</button>
    </form>
    </div>
  );
}

export default Contact