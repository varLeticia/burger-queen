 <input value={this.state.email}
         placeholder="email" 
         onChange={(e) => this.handleChange(e, "email")}/> 
        <input value={this.state.senha}
         placeholder="senha" 
         onChange={(e) => this.handleChange(e, "senha")}/>
        <Button text='criar usuário' onClick={this.createUser}/>
        <Button text='loga com usuário' onClick={this.singIn}/>
        <input value={this.state.banana}
           placeholder='banana'
           onChange={(e) => this.handleChange(e, "banana")}/>
        <input value={this.state.peixinho}
           placeholder='peixinho'
           onChange={(e) => this.handleChange(e, "peixinho")}/>        
        <Button text='clique aqui' onClick={this.handleClick}/>
        {
            this.state.listItem.map((item, index) => {
                return <p key={index}>{item.banana} | {item.peixinho}</p>
            })
        }



        render(){
    return(
      <Router>
        <div className="App">
        <input value={this.state.email} 
            placeholder="email"
            onChange={(e) => this.handleChange(e, "email")}/>
          <input value={this.state.senha} 
            placeholder="senha"
            onChange={(e) => this.handleChange(e, "senha")}/>
          <header className="App-header">
          <Route path='/' Component={Home}></Route>
          <Route path='/salao' Component={Salao}></Route>
          </header>
        </div>
      </Router>
      );
    }