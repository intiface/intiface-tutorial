all: clean
	mkdir -p build
	TWEEGO_PATH=. $(GOPATH)/bin/tweego -o build/index.html --head=util/piwik.html src buttplug-twine/src assets/images
	cp assets/screencaps/* build

install:
  echo "[ui]\ntls = False\n" > ~/.hgrc
	go get -u bitbucket.org/tmedwards/tweego

upgrade:
	go get -u bitbucket.org/tmedwards/tweego

clean:
	rm -rf build
