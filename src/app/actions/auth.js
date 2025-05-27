export async function signup(state, formData) {
    // 1. Validation des champs
    // ...
   
    // 2. Prepare les données pour la base de donnée
    const { name, email, password } = validatedFields.data
    // e.g. Brouille le mot de passe dans la base de donnée
    const hashedPassword = await bcrypt.hash(password, 10)
   
    // 3. Insert le nouvelle utilisateur dans la base de donnée
    const data = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning({ id: users.id })
   
    const user = data[0]
   
    if (!user) {
      return {
        message: 'An error occurred while creating your account.',
      }
    }
   
  }