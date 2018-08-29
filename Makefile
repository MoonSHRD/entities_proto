PROTOC = protoc --plugin=./protoc-gen-gogo -Isrc -I/usr/local/include
PROTOBUF_VERSION = 3.5.1
UNAME_S := $(shell uname -s)
CURRENT_DIRECTORY = $(shell pwd)

ifeq ($(UNAME_S),Linux)
	PLATFORM = linux
endif
ifeq ($(UNAME_S),Darwin)
	PLATFORM = osx
	BREW = $(shell which brew)
endif

export GOPATH=$(CURRENT_DIRECTORY)/tmpgopath:$(CURRENT_DIRECTORY)

.PHONY: all clean deps proto build



dirs:
	mkdir build

build:
	npm run proto


protoc-gen-gogo:
	go build github.com/gogo/protobuf/protoc-gen-gogo



%.pb.go: %.proto protoc-gen-gogo
	$(PROTOC) --gogo_out=src $<

proto: src/entities.proto src/entities.pb.go
	npm run proto

test: proto
	go test $(PKG)/...


deps:
	npm install
	go get \
		github.com/gogo/protobuf/jsonpb \
		github.com/gogo/protobuf/proto \



clean:
	go clean
	rm -rf \
		protoc-gen-gogo \
		src/entities.pb.go \



protobuf-install:
ifeq ($(BREW),)
	curl -OL https://github.com/google/protobuf/releases/download/v$(PROTOBUF_VERSION)/protoc-${PROTOBUF_VERSION}-$(PLATFORM)-x86_64.zip \
	&& sudo unzip protoc-$(PROTOBUF_VERSION)-$(PLATFORM)-x86_64.zip -d /usr/local && sudo chmod 755 /usr/local/bin/protoc \
	&& sudo find /usr/local/include/google -type d -exec chmod 755 -- {} + && sudo find /usr/local/include/google -type f -exec chmod 644 -- {} + \
	&& rm protoc-$(PROTOBUF_VERSION)-$(PLATFORM)-x86_64.zip
else
	$(BREW) install protobuf
endif



