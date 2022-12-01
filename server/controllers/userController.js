import { User } from "../models/User.js";

// se importa modelo de mongoose.Schema
//se crea la funcion para tomar esos datos y manejarlos

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(newUser);
    res.json({
      success: true,
      message: "usuario creado",
      id: newUser._id,
    });
    //console.log("crear usuario");
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find()
    res.json({ success: true, users });
    console.log("obtener usuario");
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params


    const resultado = await User.findByIdAndDelete(id)

    if (!resultado) {
      throw new Error('no existe')
    }

    res.json({ success: true, response: 'Elemento borrado' })
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}
export const editUser = async (req, res) => {
    try {
      const { id } = req.params
      const resultado = await User.findByIdAndUpdate(id, req.body, { new: true })
      if (!resultado) {
        throw new Error('No found')
      }
      res.json({ success: true })
    } catch (error) {
      res.json({ success: false, message: error.message })
    }
  }
  export const login = async (req, res) => {
    try {
      const { correo, password } = req.body
  
      const user = await User.findOne({ correo })
      if (!user) {
        throw new Error('Usuario y/o clave incorrecta')
      }
  
      const validate = user.validatePassword(password, user.salt, user.password)
      if (!validate) {
        throw new Error('Usuario y/o clave incorrecta')
      }
  
      res.json({ success: true, mensaje: 'usuario logueado', token: user.generateToken() })
    } catch (error) {
      res.json({ success: false, error: error.message })
    }
  }