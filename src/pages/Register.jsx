import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log('Registration successful:', formData);
      };
    
      return (
        <div style={styles.container}>
          <h2 style={styles.title}>Register</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label htmlFor="username" style={styles.label}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Register</button>
          </form>
        </div>
      );
    };
    
    const styles = {
      container: {
        maxWidth: '400px',
        margin: '70px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f0efe8',
      },
      title: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#e4b0f6',
        fontSize: "30px",
        textTransform: "uppercase",
        fontWeight: "bold",
        
      },
      form: {
        display: 'flex',
        flexDirection: 'column',
      },
      formGroup: {
        marginBottom: '15px',
      },
      label: {
        marginBottom: '5px',
        fontSize: '14px',
        color: '#555',
      },
      input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        width: '100%',
        boxSizing: 'border-box',
      },
      button: {
        padding: '10px 15px',
        fontSize: '16px',
        backgroundColor: '#e4b0f6',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
      },
    };
export default Register;
