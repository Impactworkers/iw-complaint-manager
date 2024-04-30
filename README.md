# iw-complaint-manager

This repository will be the home of Impactworkers Complaint Manager 2.0. Further information coming soon!

## Contributors

- Shakeel Bhamani
- Justin Anthony
- Mariah Sager
- Victoria Wong
- Fara Hughes 
- Paul Thompson
- Charles Woods
- Yooboo Park
- Julio Espinola
- Raina Huerta

## Jekyll Commands

- If wanting to run locally
- Install ruby and, chruby which is a version manager
brew install chruby ruby-install xz
ruby-install ruby 3.1.3

- Configure your shell to automatically use chruby. (Use your .zshrc, if you don’t have that use .bash_profile)
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-3.1.3" >> ~/.zshrc # run 'chruby' to see actual version

- Install Jekyll
gem install jekyll

- Now that your machine has ruby and Jekyll we can install all the necessary prerequisites 
gem install jekyll bundler

- In folder with Jekyll gem(docs folder), run startup server command, after build executes browse to localhost:4000
bundle exec jekyll serve

- To stop server
ctrl + c 

Note: If changes are made to the _config.yml then you will need to stop and start the jekyll server.