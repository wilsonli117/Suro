@features.each do |feature|
    json.set! feature.id do
        json.extract! feature, :id, :name
    end
end