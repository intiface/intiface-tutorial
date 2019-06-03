all: clean
	mkdir -p build
	TWEEGO_PATH=. $(GOPATH)/bin/tweego -o build/index.html --head=util/piwik.html src buttplug-twine/src assets/images
	cp assets/screencaps/* build

netlify:
	wget http://www.motoslave.net/tweego/download.php/tweego-1.3.0-linux-x64.zip
	unzip tweego-1.3.0-linux-x64.zip
	chmod 755 tweego
	mkdir -p build
	TWEEGO_PATH=. ./tweego -o build/index.html --head=util/piwik.html src buttplug-twine/src assets/images
	cp assets/screencaps/* build

install:
	go install bitbucket.org/tmedwards/tweego

upgrade:
	go get -u bitbucket.org/tmedwards/tweego

clean:
	rm -rf build
